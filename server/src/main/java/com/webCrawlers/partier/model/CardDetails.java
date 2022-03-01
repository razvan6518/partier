package com.webCrawlers.partier.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class CardDetails {

    private String sptripePaymentMethodId;
    private String number;
    private int expYear;
    private int expMonth;
    private int cvv;

}
