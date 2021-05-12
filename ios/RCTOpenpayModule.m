//
//  RCTOpenpayModule.m
//  potencia
//
//  Created by Daniel Muñoz on 12/05/21.
//

#import <Foundation/Foundation.h>
#import "RCTOpenpayModule.h"

@implementation RCTOpenpayModule


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCreditCard:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  resolve(@"Creando tarjeta");
}
@end
