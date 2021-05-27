//
//  SwOpenpay.swift
//  potencia
//
//  Created by Daniel Muñoz on 12/05/21.
//

import Foundation
import OpenpayKit
import UIKit

var openpay : Openpay!

@objc
class SwOpenpay: NSObject {
  
  @objc
  func createCreditcard(_ name:String,cardNumber:String,expirationYear:String, expirationMonth:String,cvv:String, resolve: @escaping RCTPromiseResolveBlock,  rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
      openpay = Openpay(withMerchantId: "mb1jr1xx3s5wflq2sgxz", andApiKey: "pk_9eb64e5a2d964142bd43ca843cc79f45", isProductionMode: false, isDebug: false)
      let card = TokenizeCardRequest(cardNumber: cardNumber, holderName: name, expirationYear: expirationYear, expirationMonth: expirationMonth, cvv2: cvv)
      openpay.tokenizeCard(card: card) { (OPToken) in
        resolve("Success")
      } failureFunction: { (NSError) in
        resolve("Error")
      }

    }
}
