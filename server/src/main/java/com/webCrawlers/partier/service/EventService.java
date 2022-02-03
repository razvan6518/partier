package com.webCrawlers.partier.service;

import com.webCrawlers.partier.model.Event;
import com.webCrawlers.partier.service.DAO.EventDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class EventService {

    private final EventDao eventDao;

    @Autowired
    public EventService(EventDao eventDao) {
        this.eventDao = eventDao;
    }

    public Set<Event> getAllEvents() {
        return eventDao.getAllEvents();
    }

    public Event getEvent(int id) {
        return eventDao.getEvent(id);
    }

}
