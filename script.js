// Function to calculate the discount based on customer type
function calculateDiscount(total, custType) {
    if (custType === "PWD/Senior") {
        return total * 0.15; // 15% discount for PWD/Senior
    } else {
        return 0; // No discount for Regular
    }
}

// Function to display the appointment summary on the page
function printSummary() {
    // Function to calculate the subtotal price for the selected service and number of sessions
    function calculateSubtotal(service, sessions) {
        let price;
        // Switch statement to determine the price per session based on service type
        switch(service) {
            case "Dental Check-up": 
                price = 850; 
                break;
            case "Eye Check-up": 
                price = 900; 
                break;
            case "Physical Exam": 
                price = 800; 
                break;
            default: 
                return "Service not found"; // Return error if service not recognized
        }
        return price * sessions; // Multiply price by number of sessions
    }
    
    // Get values from the form inputs
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let service = document.getElementById("service").value;
    let sessions = parseInt(document.getElementById("sessions").value);
    let custType = document.getElementById("custType").value;
    
    // Calculate subtotal using the calculateSubtotal function
    let subtotal = calculateSubtotal(service, sessions);
    if (subtotal === "Service not found") {
        document.getElementById("summary").innerHTML = "Service not found";
        return false;
    }
    
    // Calculate discount using the calculateDiscount function
    let discount = calculateDiscount(subtotal, custType);
    let total = subtotal - discount; // Final total after discount
    
    // Determine the service label for display
    let serviceLabel;
    switch(service) {
        case "Dental Check-up": 
            serviceLabel = "Dental Check-up (PHP 850)"; 
            break;
        case "Eye Check-up": 
            serviceLabel = "Eye Check-up (PHP 900)"; 
            break;
        case "Physical Exam": 
            serviceLabel = "Physical Exam (PHP 800)"; 
            break;
        default: 
            serviceLabel = "Service not found";
    }
    
    // Display the summary
    document.getElementById("summary").innerHTML = 
        "<h2>APPOINTMENT SUMMARY</h2>" +
        "<p>Name: " + name + "</p>" +
        "<p>Grade & Section: " + id + "</p>" +
        "<p>Order: " + serviceLabel + "</p>" +
        "<p>Quantity: " + sessions + "</p>" +
        "<p>Subtotal: PHP " + subtotal + "</p>" +
        "<p>Discount: PHP " + discount + "</p>" +
        "<p>Total: PHP " + total + "</p>" +
        "<p>Thank you for booking with us!</p>";
    
    // Prevent form submission from reloading the page
    return false;
}
