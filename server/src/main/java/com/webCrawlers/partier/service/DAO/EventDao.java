package com.webCrawlers.partier.service.DAO;

import com.webCrawlers.partier.model.Event;

import java.util.Set;

public interface EventDao {

    Set<Event> getAllEvents();
    public void addEvent(Event event);
    public Event getEvent(int id);

}
