package com.itb.inf2fm.innova.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.itb.inf2fm.innova.model.entity.coupons;
import com.itb.inf2fm.innova.model.entity.userCoupons;
import com.itb.inf2fm.innova.model.services.couponsService;
import com.itb.inf2fm.innova.model.services.userCouponsService;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/user-coupons")
@CrossOrigin(origins = "*")
public class userCouponsController {

    @Autowired
    private userCouponsService userCouponsService;

    @Autowired
    private couponsService couponsService;

    @GetMapping
    public ResponseEntity<Object> getMyCoupons(HttpServletRequest request) {
        String uid = (String) request.getAttribute("firebaseUid");
        if (uid == null) return ResponseEntity.status(401).build();

        List<userCoupons> saved = userCouponsService.findByUser(uid);
        List<coupons> result = saved.stream()
            .map(uc -> {
                try { return couponsService.findById(uc.getCouponId()); }
                catch (Exception e) { return null; }
            })
            .filter(c -> c != null)
            .collect(Collectors.toList());

        return ResponseEntity.ok(result);
    }

    @PostMapping("/{couponId}")
    public ResponseEntity<Object> saveCoupon(@PathVariable Long couponId, HttpServletRequest request) {
        String uid = (String) request.getAttribute("firebaseUid");
        if (uid == null) return ResponseEntity.status(401).build();

        if (userCouponsService.exists(uid, couponId))
            return ResponseEntity.badRequest().body(Map.of("message", "Cupom já salvo"));

        return ResponseEntity.ok(userCouponsService.save(uid, couponId));
    }

    @DeleteMapping("/{couponId}")
    public ResponseEntity<Object> removeCoupon(@PathVariable Long couponId, HttpServletRequest request) {
        String uid = (String) request.getAttribute("firebaseUid");
        if (uid == null) return ResponseEntity.status(401).build();

        userCouponsService.delete(uid, couponId);
        return ResponseEntity.ok(Map.of("message", "Cupom removido"));
    }
}
