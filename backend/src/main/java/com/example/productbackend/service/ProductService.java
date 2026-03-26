package com.example.productbackend.service;

import com.example.productbackend.dto.ProductRequestDTO;
import com.example.productbackend.entity.Product;
import com.example.productbackend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    @SuppressWarnings("null")
    @Transactional
    public Product saveProduct(ProductRequestDTO dto) {
        Product product = Product.builder()
                .name(dto.getName())
                .imageUrl(dto.getImageUrl())
                .build();
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
