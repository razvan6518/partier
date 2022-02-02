package com.webCrawlers.Partier.controller;

import com.webCrawlers.Partier.model.Event;
import com.webCrawlers.Partier.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/events")
public class EventsController {

    EventService eventService;

    @Autowired
    public EventsController(EventService es) {
        this.eventService = es;
    }

    @RequestMapping("/{id}")
    public Event getEvent(@PathVariable int id) {
        return eventService.getEvent(id);
    }

    @RequestMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public Set<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

}
