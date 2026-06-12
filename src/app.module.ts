import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { FinanceModule } from './finance/finance.module';
import { ReputationModule } from './reputation/reputation.module';
import { AiModule } from './ai/ai.module';
import { PayrollModule } from './payroll/payroll.module';
import { ExpensesModule } from './expenses/expenses.module';
import { PaymentsModule } from './payments/payments.module';
import { InvoiceModule } from './invoice/invoice.module';
import { WalletModule } from './wallet/wallet.module';
import { OrganisationsModule } from './organisations/organisations.module';

@Module({
  imports: [UserModule, FinanceModule, ReputationModule, AiModule, PayrollModule, ExpensesModule, PaymentsModule, InvoiceModule, WalletModule, OrganisationsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
