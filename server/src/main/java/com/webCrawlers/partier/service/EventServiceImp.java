package com.webCrawlers.partier.service;

import com.webCrawlers.partier.model.Event;
import com.webCrawlers.partier.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class EventServiceImp implements EventService{

    EventRepository eventRepository;

    @Autowired
    public EventServiceImp(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public Set<Event> getAllApprovedEvents() {
        return Set.copyOf(eventRepository.findAll().stream().filter(event -> event.isApproved()).collect(Collectors.toSet()));
    }

    public Set<Event> getAllUnapprovedEvents() {
        return Set.copyOf(eventRepository.findAll().stream().filter(event -> !event.isApproved()).collect(Collectors.toSet()));
    }

    public Event getEvent(Long id) {
        return eventRepository.findById(id).orElse(null);
    }

    public void addEvent(Event event) {
        eventRepository.save(event);
    }

}
