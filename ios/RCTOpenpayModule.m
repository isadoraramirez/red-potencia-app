//
//  RCTOpenpayModule.m
//  potencia
//
//  Created by Daniel Muñoz on 12/05/21.
//

#import <Foundation/Foundation.h>
#import "RCTOpenpayModule.h"
#import <OpenpayKit/OpenpayKit-Swift.h>
#import "potencia-Swift.h"
@implementation RCTOpenpayModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCreditCard:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  SwOpenpay * obj = [[SwOpenpay alloc] init];
  [obj createCreditcard:resolve rejecter:reject];
  
}


@end
