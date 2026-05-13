package com.itb.inf2fm.innova.model.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.itb.inf2fm.innova.model.entity.userCoupons;
import com.itb.inf2fm.innova.model.repository.userCouponsRepository;

@Service
public class userCouponsService {

    @Autowired
    private userCouponsRepository userCouponsRepository;

    public List<userCoupons> findByUser(String firebaseUid) {
        return userCouponsRepository.findByFirebaseUid(firebaseUid);
    }

    public boolean exists(String firebaseUid, Long couponId) {
        return userCouponsRepository.findByFirebaseUidAndCouponId(firebaseUid, couponId).isPresent();
    }

    public userCoupons save(String firebaseUid, Long couponId) {
        userCoupons uc = new userCoupons();
        uc.setFirebaseUid(firebaseUid);
        uc.setCouponId(couponId);
        return userCouponsRepository.save(uc);
    }

    @Transactional
    public void delete(String firebaseUid, Long couponId) {
        userCouponsRepository.deleteByFirebaseUidAndCouponId(firebaseUid, couponId);
    }
}
