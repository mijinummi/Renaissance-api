import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leaderboard } from './entities/leaderboard.entity';
import { LeaderboardStats } from './entities/leaderboard-stats.entity';
import { UserLeaderboardStats } from './entities/user-leaderboard-stats.entity';
import { LeaderboardService } from './leaderboard.service';
import { User } from '../users/entities/user.entity';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardQueryService } from './leaderboard-query.service';
import { BetPlacedEventHandler } from './listeners/bet-placed.listener';
import { BetSettledEventHandler } from './listeners/bet-settled.listener';
import { SpinSettledEventHandler } from './listeners/spin-settled.listener';
import { StakeCreditedEventHandler } from './listeners/stake-credited.listener';
import { StakeDebitedEventHandler } from './listeners/stake-debited.listener';

@Module({
  imports: [TypeOrmModule.forFeature([Leaderboard, LeaderboardStats, UserLeaderboardStats, User]), CqrsModule],
  controllers: [LeaderboardController],
  providers: [
    LeaderboardService,
    LeaderboardQueryService,
    BetPlacedEventHandler,
    BetSettledEventHandler,
    SpinSettledEventHandler,
    StakeCreditedEventHandler,
    StakeDebitedEventHandler,
  ],
  exports: [LeaderboardService],
})
export class LeaderboardModule {}
