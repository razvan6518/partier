package com.webCrawlers.partier.controller;

import com.webCrawlers.partier.model.Event;
import com.webCrawlers.partier.service.EventServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

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

}
