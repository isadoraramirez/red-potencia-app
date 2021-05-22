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
  func createCreditcard(_ resolve: @escaping RCTPromiseResolveBlock,  rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
      openpay = Openpay(withMerchantId: "mb1jr1xx3s5wflq2sgxz", andApiKey: "pk_9eb64e5a2d964142bd43ca843cc79f45", isProductionMode: false, isDebug: false)
      let card = TokenizeCardRequest(cardNumber: "4111111111111111", holderName: "John Doe", expirationYear: "20", expirationMonth: "10", cvv2: "111")
      openpay.tokenizeCard(card: card) { (OPToken) in
        resolve("Success")
      } failureFunction: { (NSError) in
        resolve("Error")
      }

    }
}
