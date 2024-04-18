export interface TransactionInfo {
    id: string;
    object: string;
    amount: number;
    amount_captured: number;
    amount_refunded: number;
    application?: any;
    application_fee?: any;
    application_fee_amount?: any;
    balance_transaction: string;
    billing_details: Billingdetails;
    calculated_statement_descriptor: string;
    captured: boolean;
    created: number;
    currency: string;
    customer?: any;
    description?: any;
    destination?: any;
    dispute?: any;
    disputed: boolean;
    failure_balance_transaction?: any;
    failure_code?: any;
    failure_message?: any;
    fraud_details: Frauddetails;
    invoice?: any;
    livemode: boolean;
    metadata: Frauddetails;
    on_behalf_of?: any;
    order?: any;
    outcome: Outcome;
    paid: boolean;
    payment_intent: string;
    payment_method: string;
    payment_method_details: Paymentmethoddetails;
    radar_options: Frauddetails;
    receipt_email?: any;
    receipt_number?: any;
    receipt_url: string;
    refunded: boolean;
    refunds: Refunds;
    review?: any;
    shipping?: any;
    source?: any;
    source_transfer?: any;
    statement_descriptor?: any;
    statement_descriptor_suffix?: any;
    status: string;
    transfer_data?: any;
    transfer_group?: any;
}

interface Refunds {
    object: string;
    data: any[];
    has_more: boolean;
    total_count: number;
    url: string;
}

interface Paymentmethoddetails {
    card: Card;
    type: string;
}

interface Card {
    amount_authorized: number;
    brand: string;
    checks: any[];
    country: string;
    exp_month: number;
    exp_year: number;
    extended_authorization: any[];
    fingerprint: string;
    funding: string;
    incremental_authorization: any[];
    installments?: any;
    last4: string;
    mandate?: any;
    multicapture: any[];
    network: string;
    network_token: any[];
    overcapture: any[];
    three_d_secure?: any;
    wallet?: any;
}

interface Outcome {
    network_status: string;
    reason?: any;
    risk_level: string;
    risk_score: number;
    seller_message: string;
    type: string;
}

interface Frauddetails {}

interface Billingdetails {
    address: Address;
    email: string;
    name?: any;
    phone?: any;
}

interface Address {
    city?: any;
    country: string;
    line1?: any;
    line2?: any;
    postal_code?: any;
    state?: any;
}
