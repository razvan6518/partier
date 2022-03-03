package com.webCrawlers.partier.controller;

import com.stripe.model.PaymentMethod;
import com.webCrawlers.partier.model.Card;
import com.webCrawlers.partier.model.CardDetails;
import com.webCrawlers.partier.model.Event;
import com.webCrawlers.partier.model.user.AppUser;
import com.webCrawlers.partier.service.CardService;
import com.webCrawlers.partier.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Set;

import static com.webCrawlers.partier.util.StripeApi.getPaymentMethodsByIds;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;
    private final CardService cardService;

    @GetMapping("/users")
    public ResponseEntity<List<AppUser>> getUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<AppUser> getUserById(@PathVariable long id) {
        return ResponseEntity.ok().body(userService.getUser(id));
    }

    @GetMapping("/users/name/{username}")
    public ResponseEntity<AppUser> getUserByUsername(@PathVariable String username) {
        return ResponseEntity.ok().body(userService.getUser(username));
    }

    @GetMapping("/user/organiser")
    public boolean getAuth() {
        return true;
    }

    @PostMapping("/user/save")
    public ResponseEntity<AppUser> saveUser(@RequestBody AppUser user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
        return ResponseEntity.created(uri).body(userService.saveUser(user));
    }

    @PostMapping("/user/update/{id}")
    public ResponseEntity<AppUser> updateUser(@RequestBody AppUser user, @PathVariable long id) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/update").toUriString());
        return ResponseEntity.created(uri).body(userService.updateUser(user, id));
    }

    @PostMapping("/event/favorites")
    public ResponseEntity<?> addToFavorites(@RequestBody EventToUserForm eventToUserForm) {
        userService.addEventToFavorites(eventToUserForm.getUsername(), eventToUserForm.getEventId());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/cards/{username}")
    public List<CardDetails> getCardsForUser(@PathVariable String username) {
//        userService.getCardsForUser(username);
        return userService.getCardsForUser(username);
    }

    @GetMapping("/event/favorites/{username}")
    public Set<Event> getFavoritesForUser(@PathVariable String username) {
        return userService.getAllFavoriteEventsForUser(username);
    }

    @PostMapping("/user/add-card/{username}")
    public ResponseEntity<?> addCardToUser(@RequestBody CardDetails cardDetails, @PathVariable String username) {
        String stripePaymentMethodId = userService.generatePaymentMethodId(cardDetails, String.valueOf(username));
        Long id = cardService.addCard(new Card(null, stripePaymentMethodId));
        userService.addCard(username, id);
        return ResponseEntity.ok().build();
    }
}

@Data
class EventToUserForm {
    private String username;
    private Long eventId;
}

