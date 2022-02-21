package com.webCrawlers.partier.service;

import com.webCrawlers.partier.model.Event;

import java.util.Set;

public interface EventService {

    Set<Event> getAllApprovedEvents();
    Event getEvent(Long id);
    void addEvent(Event event);
}
