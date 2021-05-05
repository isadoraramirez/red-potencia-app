package com.potencia;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import mx.openpay.android.Openpay;
import mx.openpay.android.OperationCallBack;
import mx.openpay.android.OperationResult;
import mx.openpay.android.exceptions.OpenpayServiceException;
import mx.openpay.android.exceptions.ServiceUnavailableException;
import mx.openpay.android.model.Card;

public class OpenpayManager extends ReactContextBaseJavaModule {
    public OpenpayManager (ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "OpenpayModule";
    }

    @ReactMethod
    public void testModule(final Promise promise) {
        promise.resolve("Test Module");
    }

    @ReactMethod
    public void createCreditCard(@NonNull final String name, final Promise promise){
        Openpay openpay = new Openpay("mb1jr1xx3s5wflq2sgxz", "pk_9eb64e5a2d964142bd43ca843cc79f45", false);
        Card card = new Card();
        card.holderName(name);
        card.cardNumber("4111111111111111");
        card.expirationMonth(12);
        card.expirationYear(23);
        card.cvv2("110");

        openpay.createToken(card, new OperationCallBack() {

            @Override
            public void onSuccess(OperationResult arg0) {
                promise.resolve("success");
            }

            @Override
            public void onError(OpenpayServiceException arg0) {
                //Handle Error
                promise.resolve(arg0.description);
            }

            @Override
            public void onCommunicationError(ServiceUnavailableException arg0) {
                //Handle communication error
                promise.resolve(arg0.getCause());
            }
        });
    }

}