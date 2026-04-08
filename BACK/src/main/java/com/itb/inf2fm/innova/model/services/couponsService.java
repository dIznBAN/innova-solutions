package com.itb.inf2fm.innova.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.itb.inf2fm.innova.model.entity.coupons;
import com.itb.inf2fm.innova.model.repository.couponsRepository;

@Service
public class couponsService {

    @Autowired
    private couponsRepository couponsRepository;

    public List<coupons> findAll() {
        return couponsRepository.findAll();
    }

    public coupons save(coupons coupons) {
        return couponsRepository.save(coupons);
    }

    public coupons findById(Long id) {
        return couponsRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Cupom não encontrado" + id));
    }

    public coupons update(Long id, coupons coupons) {
        coupons couponsExistente = findById(id);
        couponsExistente.setStore_id(coupons.getStore_id());
        couponsExistente.setDiscount(coupons.getDiscount());
        couponsExistente.setAffiliate_link(coupons.getAffiliate_link());
        couponsExistente.setImage_url(coupons.getImage_url());
        couponsExistente.setValid_from(coupons.getValid_from());
        couponsExistente.setValid_until(coupons.getValid_until());
        return couponsRepository.save(couponsExistente);
    }

    public void delete(Long id) {
        coupons couponExistente = findById(id);
        couponsRepository.delete(couponExistente);
    }
}