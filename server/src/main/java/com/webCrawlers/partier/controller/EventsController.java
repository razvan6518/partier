package com.webCrawlers.partier.controller;

import com.webCrawlers.partier.model.Event;
import com.webCrawlers.partier.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:3000")
public class EventsController {

    EventService eventService;

    @Autowired
    public EventsController(EventService es) {
        this.eventService = es;
    }

    @GetMapping("/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
    public Event getEvent(@PathVariable Long id) {
        return eventService.getEvent(id);
    }

    @GetMapping
//    @CrossOrigin(origins = "http://localhost:3000")
    public Set<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @PostMapping
//    @CrossOrigin(origins = "http://localhost:3000")
    public void addEvent(@RequestBody Event event) {
        eventService.addEvent(event);
    }

}
