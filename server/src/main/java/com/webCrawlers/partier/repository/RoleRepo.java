package com.webCrawlers.partier.repository;

import com.webCrawlers.partier.model.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
