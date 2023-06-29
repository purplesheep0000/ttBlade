package com.example.backend;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.RegistrationRequest;


@RestController
public class RegistrationController {

    @PostMapping("/signin")
    public String registerUser(@RequestBody RegistrationRequest request) {
        // 在这里编写处理注册请求的逻辑
        // 获取请求中的用户名、电子邮件和密码
        String username = request.getUsername();
        String email = request.getEmail();
        String password = request.getPassword();

        // 在这里可以进行注册逻辑的处理，例如将用户信息保存到数据库中

        // 返回响应给前端
        return "Registration successful";
    }
}

