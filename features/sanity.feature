Feature: : Sanity Check

    @Regression
    Scenario: Placing an order for Sanity check
        Given a login to Ecommerce application with "chiranjeevee@gmail.com" and "Hewitt@5"
        When Add "ZARA COAT 3" to the cart
        Then Verify "ZARA COAT 3" is displayed in the Cart
        When Enter valid details and Place the order
        Then Verify order is present in the OrderHistory

    @Validation
    Scenario Outline: Placing an order for error validation
        Given a login to Ecommerce2 application with "<userName>" and "<password>"
        Then Verify Error Message is displayed

        Examples:
            | userName               | password     |
            | chiranjeevee@gmail.com | Hewitt@5     |
            | chiranjeevee@gmail.com | Deekshitha@5 |
