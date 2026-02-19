package com.university.portal.controller;

import com.university.portal.dto.*;
import com.university.portal.entity.User;
import com.university.portal.repository.UserRepository;
import com.university.portal.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired private UserRepository userRepository;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtUtil jwtUtil;
    @Autowired private AuthenticationManager authManager;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        if (userRepository.existsByEmail(req.getEmail())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already registered"));
        }
        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        user.setRole(User.Role.valueOf(req.getRole().toUpperCase()));
        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "Registration successful"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        try {
            Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword())
            );
            User user = userRepository.findByEmail(req.getEmail()).orElseThrow();
            String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
            return ResponseEntity.ok(new AuthResponse(token, user.getRole().name(), user.getName(), user.getEmail()));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
        }
    }
}
