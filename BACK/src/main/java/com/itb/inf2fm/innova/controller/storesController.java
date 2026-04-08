package com.itb.inf2fm.innova.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.itb.inf2fm.innova.model.entity.stores;
import com.itb.inf2fm.innova.model.entity.users;
import com.itb.inf2fm.innova.model.services.storesServices;
import com.itb.inf2fm.innova.model.services.usersService;
import jakarta.servlet.http.HttpServletRequest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/stores")
@CrossOrigin(origins = "*")
public class storesController {

    @Autowired
    private storesServices storesServices;

    @Autowired
    private usersService usersService;

    @GetMapping
    public ResponseEntity<List<stores>> getAll() {
        return ResponseEntity.ok(storesServices.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable String id) {
        try {
            return ResponseEntity.ok(storesServices.findById(Long.parseLong(id)));
        } catch (NumberFormatException e) {
            return badRequest("O id informado não é válido: " + id);
        } catch (RuntimeException e) {
            return notFound("Loja não encontrada com o id " + id);
        }
    }

    @GetMapping("/nome/{name}")
    public ResponseEntity<Object> getByName(@PathVariable String name) {
        List<stores> result = storesServices.findByName(name);
        if (result.isEmpty()) return notFound("Nenhuma loja encontrada com o nome " + name);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/cidade/{cidade}")
    public ResponseEntity<Object> getByCidade(@PathVariable String cidade) {
        List<stores> result = storesServices.findByCidade(cidade);
        if (result.isEmpty()) return notFound("Nenhuma loja encontrada na cidade " + cidade);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/top-rated")
    public ResponseEntity<List<stores>> getTopRated() {
        return ResponseEntity.ok(storesServices.findTopRated());
    }

    @GetMapping("/avaliacao/{minima}")
    public ResponseEntity<Object> getByAvaliacaoMinima(@PathVariable String minima) {
        try {
            return ResponseEntity.ok(storesServices.findByAvaliacaoMinima(Double.parseDouble(minima)));
        } catch (NumberFormatException e) {
            return badRequest("Avaliação inválida: " + minima);
        }
    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody stores store, HttpServletRequest request) {
        if (!isAdmin(request)) return ResponseEntity.status(403).build();
        return ResponseEntity.ok(storesServices.save(store));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @RequestBody stores store, HttpServletRequest request) {
        if (!isAdmin(request)) return ResponseEntity.status(403).build();
        try {
            return ResponseEntity.ok(storesServices.update(Long.parseLong(id), store));
        } catch (NumberFormatException e) {
            return badRequest("O id informado não é válido: " + id);
        } catch (RuntimeException e) {
            return notFound("Loja não encontrada com o id " + id);
        }
    }

    @PatchMapping("/{id}/avaliar")
    public ResponseEntity<Object> avaliar(@PathVariable String id, @RequestBody Map<String, Double> body) {
        Double nota = body.get("nota");
        if (nota == null || nota < 0 || nota > 5)
            return badRequest("Nota inválida. Informe um valor entre 0 e 5.");
        try {
            return ResponseEntity.ok(storesServices.avaliar(Long.parseLong(id), nota));
        } catch (NumberFormatException e) {
            return badRequest("O id informado não é válido: " + id);
        } catch (RuntimeException e) {
            return notFound("Loja não encontrada com o id " + id);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id, HttpServletRequest request) {
        if (!isAdmin(request)) return ResponseEntity.status(403).build();
        try {
            storesServices.delete(Long.parseLong(id));
            Map<String, String> response = new HashMap<>();
            response.put("message", "Loja deletada com sucesso");
            return ResponseEntity.ok(response);
        } catch (NumberFormatException e) {
            return badRequest("O id informado não é válido: " + id);
        } catch (RuntimeException e) {
            return notFound("Loja não encontrada com o id " + id);
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
