import cron from 'node-cron';
import 'dotenv/config';
import { Account } from './types';
import { getAccount, deleteAccount } from './db';
import { sendWa } from './lib/wa'

cron.schedule('*/10 * * * * *', () => {
  console.log('running a task every 10 second');
  getAccount().then((tables) => {
    const accounts: Account[] = tables
    accounts.forEach((account) => {
      console.log("send to", account.no_wa)
      sendWa(account.no_wa, `Halo ${account.name}, ini adalah pesan dari bot`)
        .then((res:any) => {
          const data = res.data
          deleteAccount(account.no_wa)
        }).catch((err) => {
          console.log(err.response.data)
        })
    })
  }).catch((err) => {
    console.log(err)
  })
});



