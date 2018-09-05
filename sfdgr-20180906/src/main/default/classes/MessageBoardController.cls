public class MessageBoardController {

  @AuraEnabled
  public static MessageBoard__c getMessageBoard() {
    // 最新のMessageBoardカスタムオブジェクトを返却するメソッドです。
    // 【注】レコードがない場合は例外が発⽣します。
    MessageBoard__c messageBoard = [
      SELECT
        Id,
        Name,
        Message__c
      FROM
        MessageBoard__c
      ORDER BY
        CreatedDate DESC
      LIMIT 1
    ];

    return messageBoard;
  }
}