package com.webCrawlers.partier.controller;

import com.stripe.model.PaymentIntent;
import com.webCrawlers.partier.model.Event;
import com.webCrawlers.partier.service.EventServiceImp;
import com.webCrawlers.partier.util.StripeApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

import static com.webCrawlers.partier.util.StripeApi.createPaymentIntent;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:3000")
public class EventsController {

    EventServiceImp eventService;

    @Autowired
    public EventsController(EventServiceImp es) {
        this.eventService = es;
    }

    @GetMapping("/{id}")
    public Event getEvent(@PathVariable Long id) {
        return eventService.getEvent(id);
    }

    @GetMapping("/approved")
    public Set<Event> getAllApprovedEvents() {
        return eventService.getAllApprovedEvents();
    }

    @GetMapping("/unapproved")
    public Set<Event> getAllUnapprovedEvents() {
        return eventService.getAllUnapprovedEvents();
    }

    @PostMapping
    public void addEvent(@RequestBody Event event) {
        eventService.addEvent(event);
    }

    @PutMapping("/approve/{id}")
    public void approveEvent(@PathVariable Long id) {
        eventService.approveEvent(id);
    }

    @PostMapping("/delete/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
    }


    @GetMapping("/favorites/{userId}")
    public Set<Event> getAllFavoriteEventsForUser(@PathVariable Long userId) {
        return eventService.getAllFavoriteEventsForUser(userId);
    }

    @GetMapping("/buy/{eventId}/{stripeUserId}/{paymentMethodId}")
    public Set<Event> getAllFavoriteEventsForUser(@PathVariable String paymentMethodId, @PathVariable String stripeUserId) {
        PaymentIntent paymentIntent = createPaymentIntent(100, "USD", stripeUserId);
        PaymentIntent updatedPaymentIntent = StripeApi.tryToConfirmPayment(paymentIntent, paymentMethodId);
        if (updatedPaymentIntent.getStatus().equals("succeeded")) {
            System.out.println(updatedPaymentIntent.getId());
        } else {
            System.out.println(updatedPaymentIntent.getId());
        }
        System.out.println("");
        return null;
    }

}
