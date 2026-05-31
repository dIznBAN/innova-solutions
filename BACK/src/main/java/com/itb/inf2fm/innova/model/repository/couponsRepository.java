package com.itb.inf2fm.innova.model.repository;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.itb.inf2fm.innova.model.entity.coupons;

@Repository
public interface couponsRepository extends JpaRepository<coupons, Long> {

    @Query("SELECT c FROM coupons c WHERE c.store_id = :storeId")
    List<coupons> findByStoreId(@Param("storeId") Long storeId);

    @Query("SELECT c FROM coupons c WHERE c.store_id = :storeId AND c.valid_until >= :now")
    List<coupons> findByStoreIdValid(@Param("storeId") Long storeId, @Param("now") LocalDateTime now);
}
