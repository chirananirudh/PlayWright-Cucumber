Feature: : Error Validation
    @Validation
    Scenario Outline: Placing an order for error validation
        Given a login to Ecommerce2 application with "<userName>" and "<password>"
        Then Verify Error Message is displayed

        Examples:
            | userName               | password     |
            | chiranjeevee@gmail.com | Hewitt@5     |
            | chiranjeevee@gmail.com | Deekshitha@5 |
