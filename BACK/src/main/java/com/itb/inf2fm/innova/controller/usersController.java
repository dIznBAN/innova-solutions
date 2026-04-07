package com.itb.inf2fm.innova.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.itb.inf2fm.innova.model.entity.users;
import com.itb.inf2fm.innova.model.services.usersService;
import jakarta.servlet.http.HttpServletRequest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class usersController {

    @Autowired
    private usersService usersService;

    @GetMapping
    public ResponseEntity<List<users>> getAll(HttpServletRequest request) {
        if (!isAdmin(request)) return ResponseEntity.status(403).build();
        return ResponseEntity.ok(usersService.findAll());
    }

    @GetMapping("/health")
    public ResponseEntity<Object> health() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "UP");
        response.put("timestamp", java.time.LocalDateTime.now());
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody users user) {
        if (usersService.firebaseUidExiste(user.getFirebaseUid())) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Usuário já cadastrado");
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok(usersService.save(user));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable String id) {
        try {
            return ResponseEntity.ok(usersService.findById(Long.parseLong(id)));
        } catch (NumberFormatException e) {
            return badRequest("O id informado não é válido: " + id);
        } catch (RuntimeException e) {
            return notFound("Usuario não encontrado com o id " + id);
        }
    }

    @GetMapping("/firebase/{uid}")
    public ResponseEntity<Object> getByFirebaseUid(@PathVariable String uid) {
        users user = usersService.findByFirebaseUid(uid);
        if (user == null) return notFound("Usuario não encontrado com o uid " + uid);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @RequestBody users user) {
        try {
            return ResponseEntity.ok(usersService.update(Long.parseLong(id), user));
        } catch (NumberFormatException e) {
            return badRequest("O id informado não é válido: " + id);
        } catch (RuntimeException e) {
            return notFound("Usuario não encontrado com o id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id, HttpServletRequest request) {
        String requesterUid = (String) request.getAttribute("firebaseUid");
        if (requesterUid == null) return ResponseEntity.status(403).build();

        try {
            Long userId = Long.parseLong(id);
            users target = usersService.findById(userId);

            boolean isAdmin = isAdmin(request);
            boolean isSelf = target.getFirebaseUid().equals(requesterUid);

            if (!isAdmin && !isSelf) return ResponseEntity.status(403).build();

            usersService.delete(userId);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Usuario deletado com sucesso");
            return ResponseEntity.ok(response);
        } catch (NumberFormatException e) {
            return badRequest("O id informado não é válido: " + id);
        } catch (RuntimeException e) {
            return notFound("Usuario não encontrado com o id " + id);
        }
    }

    @PatchMapping("/{id}/role")
    public ResponseEntity<Object> updateRole(@PathVariable String id, @RequestBody Map<String, String> body, HttpServletRequest request) {
        if (!isAdmin(request)) return ResponseEntity.status(403).build();
        try {
            String newRole = body.get("role");
            if (newRole == null || (!newRole.equals("ADMIN") && !newRole.equals("USER")))
                return badRequest("Role inválido. Use ADMIN ou USER");
            return ResponseEntity.ok(usersService.updateRole(Long.parseLong(id), newRole));
        } catch (NumberFormatException e) {
            return badRequest("O id informado não é válido: " + id);
        } catch (RuntimeException e) {
            return notFound("Usuario não encontrado com o id " + id);
        }
    }

    private boolean isAdmin(HttpServletRequest request) {
        String uid = (String) request.getAttribute("firebaseUid");
        if (uid == null) return false;
        users u = usersService.findByFirebaseUid(uid);
        return u != null && "ADMIN".equals(u.getRole());
    }

    private ResponseEntity<Object> badRequest(String message) {
        Map<String, Object> err = new HashMap<>();
        err.put("status", 400);
        err.put("error", "Bad Request");
        err.put("message", message);
        return ResponseEntity.badRequest().body(err);
    }

    private ResponseEntity<Object> notFound(String message) {
        Map<String, Object> err = new HashMap<>();
        err.put("status", 404);
        err.put("error", "Not Found");
        err.put("message", message);
        return ResponseEntity.status(404).body(err);
    }
}
