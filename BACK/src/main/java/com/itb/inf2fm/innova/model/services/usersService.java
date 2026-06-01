package com.itb.inf2fm.innova.model.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.itb.inf2fm.innova.model.entity.users;
import com.itb.inf2fm.innova.model.repository.usersRepository;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;

@Service
public class usersService {

    @Autowired
    private usersRepository usersRepository;

    public List<users> findAll() {
        return usersRepository.findAll();
    }

    public users save(users user) {
        return usersRepository.save(user);
    }

    public users findById(Integer id) {
        return usersRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuario não encontrado: " + id));
    }

    public users findByFirebaseUid(String firebaseUid) {
        return usersRepository.findByFirebaseUid(firebaseUid);
    }

    public boolean firebaseUidExiste(String firebaseUid) {
        return usersRepository.existsByFirebaseUid(firebaseUid);
    }

    public users update(Integer id, users user) {
        users existente = findById(id);
        existente.setName(user.getName());
        existente.setEmail(user.getEmail());
        existente.setProfilePicture(user.getProfilePicture());
        return usersRepository.save(existente);
    }

    public users updateRole(Integer id, String role) {
        users existente = findById(id);
        existente.setRole(role);
        return usersRepository.save(existente);
    }

    public void delete(Integer id) {
        users user = findById(id);
        try {
            FirebaseAuth.getInstance().deleteUser(user.getFirebaseUid());
        } catch (FirebaseAuthException e) {
            System.err.println("[usersService] Erro ao deletar usuário do Firebase: " + e.getMessage());
            throw new RuntimeException("Erro ao deletar usuário do Firebase: " + e.getMessage());
        }
        usersRepository.delete(user);
    }
}
