package com.webCrawlers.partier.service;

import com.webCrawlers.partier.model.Event;
import com.webCrawlers.partier.repository.EventRepository;
import com.webCrawlers.partier.service.DAO.EventDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class EventService {


    @Autowired
    EventRepository eventRepository;


    public Set<Event> getAllEvents() {
        return Set.copyOf(eventRepository.findAll());
    }

    public Event getEvent(Long id) {
        return eventRepository.findById(id).orElse(null);
    }

    public void addEvent(Event event) {
        eventRepository.save(event);
    }

}
