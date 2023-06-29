package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.RegistrationRequest;
import com.google.gson.Gson;

@RestController
public class RegistrationController {

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/signin")
    public String registerUser(@RequestBody RegistrationRequest request) {
        // 在这里编写处理注册请求的逻辑
        // 获取请求中的用户名、电子邮件和密码
        String username = request.getUsername();
        String email = request.getEmail();
        String password = request.getPassword();

        // 在这里可以进行注册逻辑的处理，例如将用户信息保存到数据库中

        // 创建一个包含成功消息的JSON对象
        String message = "Registration successful";
        Gson gson = new Gson();
        String json = gson.toJson(new ApiResponse(message));

        // 返回响应给前端
        return json;
    }

    // 内部辅助类用于创建响应对象
    private static class ApiResponse {
        private final String message;

        public ApiResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }
}


