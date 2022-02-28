package com.webCrawlers.partier.controller;

import com.webCrawlers.partier.model.user.AppUser;
import com.webCrawlers.partier.model.user.Role;
import com.webCrawlers.partier.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.annotation.security.RolesAllowed;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
//@EnableGlobalMethodSecurity(jsr250Enabled=true)
public class UserController {

    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<AppUser>> getUsers(){
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<AppUser> getUserById(@PathVariable long id){
        return ResponseEntity.ok().body(userService.getUser(id));
    }

    @GetMapping("/users/name/{username}")
    public ResponseEntity<AppUser> getUserByUsername(@PathVariable String username){
        return ResponseEntity.ok().body(userService.getUser(username));
    }

    @GetMapping("/user/organiser")
    public boolean getAuth(){
        return true;
    }

    @PostMapping("/user/save")
    public ResponseEntity<AppUser> saveUser(@RequestBody AppUser user){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
        return ResponseEntity.created(uri).body(userService.saveUser(user));
    }

    @PostMapping("/user/update/{id}")
    public ResponseEntity<AppUser> updateUser(@RequestBody AppUser user, @PathVariable long id){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/update").toUriString());
        return ResponseEntity.created(uri).body(userService.updateUser(user, id));
    }

    @PostMapping("/role/save")
    public ResponseEntity<Role> saveRole(@RequestBody Role role){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
        return ResponseEntity.created(uri).body(userService.saveRole(role));
    }

}

@Data
class RoleToUserForm {
    private String username;
    private String roleName;
}
