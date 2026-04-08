package com.itb.inf2fm.innova.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.itb.inf2fm.innova.model.entity.coupons;
import com.itb.inf2fm.innova.model.services.couponsService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/coupons")
@CrossOrigin(origins = "*")
public class couponsController {

    @Autowired
    private couponsService couponsService;

    @GetMapping
    public ResponseEntity<List<coupons>> getAllCoupons() {
        return ResponseEntity.ok(couponsService.findAll());
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<coupons>> findAll() {
        return ResponseEntity.ok(couponsService.findAll());
    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody coupons coupons) {
        return ResponseEntity.ok(couponsService.save(coupons));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> listarCupomPorId(@PathVariable String id) {
        try {
            return ResponseEntity.ok(couponsService.findById(Long.parseLong(id)));
        } catch (NumberFormatException e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", 400);
            errorResponse.put("error", "Bad Request");
            errorResponse.put("message", "O id informado não é válido: " + id);
            return ResponseEntity.badRequest().body(errorResponse);

        } catch (RuntimeException e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", 404);
            errorResponse.put("error", "Not Found");
            errorResponse.put("message", "Cupom não encontrado com o id " + id);
            return ResponseEntity.status(404).body(errorResponse);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> atualizarCupom(@PathVariable String id, @RequestBody coupons coupons) {
        try {
            Long couponsId = Long.parseLong(id);
            coupons couponsExistente = couponsService.findById(couponsId);

            couponsExistente.setStore_id(coupons.getStore_id());
            couponsExistente.setDiscount(coupons.getDiscount());
            couponsExistente.setAffiliate_link(coupons.getAffiliate_link());
            couponsExistente.setImage_url(coupons.getImage_url());
            couponsExistente.setValid_from(coupons.getValid_from());
            couponsExistente.setValid_until(coupons.getValid_until());

            coupons cupomAtualizado = couponsService.save(couponsExistente);

            return ResponseEntity.ok(cupomAtualizado);
        } catch (NumberFormatException e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", 400);
            errorResponse.put("error", "Bad Request");
            errorResponse.put("message", "O id informado não é válido: " + id);
            return ResponseEntity.badRequest().body(errorResponse);

        } catch (RuntimeException e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", 404);
            errorResponse.put("error", "Not Found");
            errorResponse.put("message", "Cupom não encontrado com o id " + id);
            return ResponseEntity.status(404).body(errorResponse);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> excluirCupom(@PathVariable String id) {
        try {
            Long couponsId = Long.parseLong(id);
            couponsService.delete(couponsId);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Cupom deletado com sucesso");
            return ResponseEntity.ok(response);
        } catch (NumberFormatException e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", 400);
            errorResponse.put("error", "Bad Request");
            errorResponse.put("message", "O id informado não é válido: " + id);
            return ResponseEntity.badRequest().body(errorResponse);
        } catch (RuntimeException e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", 404);
            errorResponse.put("error", "Not Found");
            errorResponse.put("message", "Cupom não encontrado com o id " + id);
            return ResponseEntity.status(404).body(errorResponse);
        }
    }
}