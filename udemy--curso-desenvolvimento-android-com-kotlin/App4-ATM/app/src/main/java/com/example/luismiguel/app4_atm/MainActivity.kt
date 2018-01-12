package com.example.luismiguel.app4_atm

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button_clients.setOnClickListener({
            val intent = Intent(this, ClientDetailActivity::class.java)
            startActivity(intent)
        })

        button_contact.setOnClickListener({
            val intent = Intent(this, ContactDetailActivity::class.java)
            startActivity(intent)
        })

        button_enterprise.setOnClickListener({
            val intent = Intent(this, EnterpriseDetailActivity::class.java)
            startActivity(intent)
        })

        button_services.setOnClickListener({
            val intent = Intent(this, ServicesDetailActivity::class.java)
            startActivity(intent)
        })
    }
}
