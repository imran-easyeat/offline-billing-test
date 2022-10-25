import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { calculateBill, calculateOfflineCartBill, calculateOfflineOrderBill } from 'bill-library';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/calculate-bill')
  calculateOfflineBill(
    @Body('orderItemInfo') orderItemInfo,
    @Body('discountInfo') discountInfo,
    @Body('chargesInfo') chargesInfo,
    @Body('roundOff') rest_round_off,
  ) {
    console.log('called controller');
    return calculateBill(
      orderItemInfo,
      discountInfo,
      chargesInfo,
      rest_round_off,
    );
  }

  
  @Get('/calculate-offline-bill')
  calculateOfflineCartBill(
    @Body('cart') cart,
    @Body('restFees') restFees,
    @Body('rest_round_off') rest_round_off,
  ) {
    console.log('called controller');
    return calculateOfflineCartBill(cart, restFees, rest_round_off);
  }

  @Get('/calculate-order-bill')
  calculateOfflineOrderBill(
    @Body('order') order,
    @Body('billing') billing,
    @Body('coupon') coupon,
    @Body('restFees') restFees,
    @Body('rest_round_off') rest_round_off,
  ) {
    console.log('called controller');
    return calculateOfflineOrderBill(order, restFees, coupon, billing,rest_round_off);
  }
}
