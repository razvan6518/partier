package com.webCrawlers.Partier.service.DAO;

import com.webCrawlers.Partier.model.Event;

import java.util.Set;

public interface EventDao {

    Set<Event> getAllEvents();
    public void addEvent(Event event);
    public Event getEvent(int id);

}
