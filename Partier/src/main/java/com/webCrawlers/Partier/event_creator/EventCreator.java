package com.webCrawlers.Partier.event_creator;

import com.webCrawlers.Partier.model.Event;
import com.webCrawlers.Partier.service.DAO.EventMem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.HashSet;

@Component
public class EventCreator {

    EventMem eventMem;

    @Autowired
    public EventCreator(EventMem eventMem) {
        this.eventMem = eventMem;
    }

    public EventCreator() {
        initialize();
    }

    public void initialize() {
        eventMem.addEvent(Event.builder()
                .id(0)
                .title("Sun Waves")
                .description("Over the last 3 years, we lived together, every year, the most intensive experiences and we wrote, year after year, the most beautiful chapters and journeys of the NEVERSEA story. We thank each one of you! Together we became a community of millions of friends, sharing the same values: the music that unites us, dancing until sunrise, being proud to promote and discover Romania, the good actions that we made together, every year.\n\nAt the end of 2019, we started the journey of NEVERSEA 2020 edition full of confidence, with exceptional plans and ideas, with many artists ready to come for the first time in Romania, with new projects and campaigns. Without any doubt, 2020 was looking great. 2020 was a year meant to exceed, once again, all the expectations!")
                .startDate("6.06.2021")
                .endDate("11.06.2021")
                .category("festival")
                .location("Plaja Mamaia")
                .image("https://electronicroads.com/wp-content/uploads/sunwaves-buun.png")
                .artists(new HashSet<>(Arrays.asList("Priku", "Solomun", "Nina Kraviz")))
                .build());

        eventMem.addEvent(Event.builder()
                .id(1)
                .title("Untold")
                .description("Over the last 3 years, we lived together, every year, the most intensive experiences and we wrote, year after year, the most beautiful chapters and journeys of the NEVERSEA story. We thank each one of you! Together we became a community of millions of friends, sharing the same values: the music that unites us, dancing until sunrise, being proud to promote and discover Romania, the good actions that we made together, every year.\n\nAt the end of 2019, we started the journey of NEVERSEA 2020 edition full of confidence, with exceptional plans and ideas, with many artists ready to come for the first time in Romania, with new projects and campaigns. Without any doubt, 2020 was looking great. 2020 was a year meant to exceed, once again, all the expectations!")
                .startDate("6.06.2021")
                .endDate("11.06.2021")
                .category("festival")
                .location("Plaja Mamaia")
                .image("https://electronicroads.com/wp-content/uploads/sunwaves-buun.png")
                .artists(new HashSet<>(Arrays.asList("Priku", "Solomun", "Nina Kraviz")))
                .build());
    }
}
