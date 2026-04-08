package com.itb.inf2fm.innova.model.services;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.itb.inf2fm.innova.model.entity.stores;
import com.itb.inf2fm.innova.model.repository.storesRepository;

@Service
public class storesServices {

    @Autowired
    private storesRepository storesRepository;

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

    public List<stores> findByCidade(String cidade) {
        return storesRepository.findByCidade(cidade);
    }

    public List<stores> findTopRated() {
        return storesRepository.findTopRated();
    }

    public List<stores> findByAvaliacaoMinima(Double avaliacao) {
        return storesRepository.findByAvaliacaoMinima(avaliacao);
    }

    public stores save(stores store) {
        store.setCreated_at(LocalDateTime.now());
        store.setStatus("ativo");
        return storesRepository.save(store);
    }

    public stores update(Long id, stores store) {
        stores existente = findById(id);
        existente.setName(store.getName());
        existente.setDescription(store.getDescription());
        existente.setImage_url(store.getImage_url());
        existente.setWebsite_url(store.getWebsite_url());
        existente.setStatus(store.getStatus());
        existente.setCidade(store.getCidade());
        existente.setUpdated_at(LocalDateTime.now());
        return storesRepository.save(existente);
    }

    public stores avaliar(Long id, Double nota) {
        stores existente = findById(id);
        int total = existente.getTotalAvaliacoes() == null ? 0 : existente.getTotalAvaliacoes();
        double mediaAtual = existente.getAvaliacao() == null ? 0.0 : existente.getAvaliacao();
        double novaMedia = ((mediaAtual * total) + nota) / (total + 1);
        existente.setAvaliacao(Math.round(novaMedia * 10.0) / 10.0);
        existente.setTotalAvaliacoes(total + 1);
        existente.setUpdated_at(LocalDateTime.now());
        return storesRepository.save(existente);
    }

    public void delete(Long id) {
        storesRepository.delete(findById(id));
    }
}
