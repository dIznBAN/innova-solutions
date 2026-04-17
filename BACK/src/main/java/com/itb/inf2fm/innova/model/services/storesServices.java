package com.itb.inf2fm.innova.model.services;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.itb.inf2fm.innova.model.entity.PartnerRegisterRequest;
import com.itb.inf2fm.innova.model.entity.coupons;
import com.itb.inf2fm.innova.model.entity.stores;
import com.itb.inf2fm.innova.model.repository.couponsRepository;
import com.itb.inf2fm.innova.model.repository.storesRepository;

@Service
public class storesServices {

    @Autowired
    private storesRepository storesRepository;

    @Autowired
    private couponsRepository couponsRepository;

    public List<stores> findAllByFirebaseUid(String firebaseUid) {
        return storesRepository.findAllByFirebaseUid(firebaseUid);
    }

    public stores findByFirebaseUid(String firebaseUid) {
        List<stores> results = storesRepository.findAllByFirebaseUid(firebaseUid);
        return results.isEmpty() ? null : results.get(0);
    }

    public List<stores> findAll() {
        return storesRepository.findAll();
    }

    public stores findById(Long id) {
        return storesRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Loja não encontrada: " + id));
    }

    public List<stores> findByName(String name) {
        return storesRepository.findByName(name);
    }

    public List<stores> findTopRated() {
        return storesRepository.findTopRated();
    }

    public List<stores> findByAvaliacaoMinima(Double avaliacao) {
        return storesRepository.findByAvaliacaoMinima(avaliacao);
    }

    public stores save(stores store) {
        store.setCreated_at(LocalDateTime.now());
        store.setStatus("Pendente");
        return storesRepository.save(store);
    }

    public stores registerPartner(PartnerRegisterRequest req) {
        stores store = new stores();
        store.setName(req.getCompanyName());
        store.setCnpj(req.getCnpj());
        store.setOwner_name(req.getOwnerName());
        store.setEmail(req.getEmail());
        store.setPhone(req.getPhone());
        store.setWebsite_url(req.getWebsite());
        store.setImage_url(req.getImageUrl());
        store.setFirebaseUid(req.getFirebaseUid());
        store.setStatus("Pendente");
        store.setAvaliacao(0.0);
        store.setCreated_at(LocalDateTime.now());
        stores saved = storesRepository.save(store);

        coupons coupon = new coupons();
        coupon.setStore_id(saved.getId());
        coupon.setTitle(req.getCouponTitle());
        coupon.setDiscount(req.getDiscount());
        coupon.setDescription(req.getDescription());
        coupon.setValid_from(LocalDateTime.now());
        coupon.setValid_until(LocalDate.parse(req.getValidUntil()).atTime(23, 59, 59));
        couponsRepository.save(coupon);

        return saved;
    }

    public stores update(Long id, stores store) {
        stores existente = findById(id);
        existente.setName(store.getName());
        existente.setImage_url(store.getImage_url());
        existente.setWebsite_url(store.getWebsite_url());
        existente.setStatus(store.getStatus());
        existente.setUpdated_at(LocalDateTime.now());
        return storesRepository.save(existente);
    }

    public stores avaliar(Long id, Double nota) {
        stores existente = findById(id);
        double mediaAtual = existente.getAvaliacao() == null ? 0.0 : existente.getAvaliacao();
        double novaMedia = (mediaAtual + nota) / 2;
        existente.setAvaliacao(Math.round(novaMedia * 10.0) / 10.0);
        existente.setUpdated_at(LocalDateTime.now());
        return storesRepository.save(existente);
    }

    public void delete(Long id) {
        storesRepository.delete(findById(id));
    }

    public stores updateStatus(Long id, String status, String rejectionReason) {
        stores existente = findById(id);
        String normalized = status.substring(0, 1).toUpperCase() + status.substring(1).toLowerCase();
        existente.setStatus(normalized);
        if (rejectionReason != null && !rejectionReason.isBlank()) {
            existente.setRejection_reason(rejectionReason);
        }
        existente.setUpdated_at(LocalDateTime.now());
        return storesRepository.save(existente);
    }
}
