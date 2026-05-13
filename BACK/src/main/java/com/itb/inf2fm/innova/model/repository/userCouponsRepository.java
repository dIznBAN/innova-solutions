package com.itb.inf2fm.innova.model.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.itb.inf2fm.innova.model.entity.userCoupons;

@Repository
public interface userCouponsRepository extends JpaRepository<userCoupons, Long> {
    List<userCoupons> findByFirebaseUid(String firebaseUid);
    Optional<userCoupons> findByFirebaseUidAndCouponId(String firebaseUid, Long couponId);
    void deleteByFirebaseUidAndCouponId(String firebaseUid, Long couponId);
}
