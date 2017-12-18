package com.example.luismiguel.lottery

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import java.util.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun drawNumber(view: View){
        var text = findViewById<TextView>(R.id.textLottery)

        var drawnNumber = Random().nextInt(11)
        text.setText("Number drawn is: $drawnNumber")
    }

}
