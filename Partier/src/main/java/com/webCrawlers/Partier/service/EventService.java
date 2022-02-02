package com.webCrawlers.Partier.service;

import com.webCrawlers.Partier.model.Event;
import com.webCrawlers.Partier.service.DAO.EventDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class EventService {

    @Autowired
    private EventDao eventDao;

    public Set<Event> getAllEvents() {
        return eventDao.getAllEvents();
    }

    public Event getEvent(int id) {
        return eventDao.getEvent(id);
    }

}
