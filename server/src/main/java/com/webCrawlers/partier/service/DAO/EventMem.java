package com.webCrawlers.partier.service.DAO;

import com.webCrawlers.partier.model.Event;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public class EventMem implements EventDao{

    private Set<Event> events;

    public EventMem(Set<Event> events) {
        this.events = events;
    }

    @Override
    public Set<Event> getAllEvents() {
        return events;
    }

    @Override
    public void addEvent(Event event) {
        events.add(event);
    }

    @Override
    public Event getEvent(int id) {
        for (Event event : events) {
            if (event.getId() == id)
                return event;
        }
        return null;
    }

}
