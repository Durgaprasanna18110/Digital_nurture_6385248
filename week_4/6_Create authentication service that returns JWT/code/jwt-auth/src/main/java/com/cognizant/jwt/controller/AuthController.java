package com.cognizant.jwt.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.util.Base64Utils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthController {

    private static final String SECRET_KEY = "secret-key"; // Use environment variable in real app

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader(value = "Authorization") String authHeader) {
        // Example: "Basic dXNlcjpwd2Q="

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length()).trim();
            byte[] decoded = Base64Utils.decodeFromString(base64Credentials);
            String[] credentials = new String(decoded).split(":", 2);

            String username = credentials[0];
            String password = credentials[1];

            // Example validation (replace with real DB check)
            if ("user".equals(username) && "pwd".equals(password)) {
                // Generate JWT
                String token = Jwts.builder()
                        .setSubject(username)
                        .setIssuedAt(new Date())
                        .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 1000)) // 1 hour
                        .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                        .compact();

                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                return ResponseEntity.ok(response);
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
