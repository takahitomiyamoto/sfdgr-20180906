public with sharing class OpportunityTableController {

  @AuraEnabled
  public static List<Opportunity> getOpportunities (String accountId) {
    List<Opportunity> opportunityList = [
      SELECT
        Id,
        Name,
        StageName,
        Amount
      FROM
        Opportunity
      WHERE
        AccountId = :accountId
        AND IsClosed = false
    ];

    return opportunityList;
  }
}