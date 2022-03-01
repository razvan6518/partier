package com.webCrawlers.partier.service;

import com.webCrawlers.partier.model.CardDetails;
import com.webCrawlers.partier.model.Event;
import com.webCrawlers.partier.model.user.AppUser;
import com.webCrawlers.partier.model.user.Role;

import java.util.List;
import java.util.Set;

public interface UserService {
    AppUser saveUser(AppUser appUser);

    Role saveRole(Role role);

    AppUser updateUser(AppUser user, long id);

    AppUser getUser(long id);

    AppUser getUser(String username);

    List<AppUser> getUsers();

    void addEventToFavorites(String username, Long eventId);

    Set<Event> getAllFavoriteEventsForUser(String username);

    String generatePaymentMethodId(CardDetails cardDetails, String userId);

    void addCard(String username, Long cardId);
}
