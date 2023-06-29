package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // 可以添加自定义的查询方法或操作数据库的方法
}
