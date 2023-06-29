package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignInController {

    @GetMapping("/signin")
    public String signIn() {
        // 处理 GET /signin 请求的逻辑
        return "Sign in page";
    }
}
