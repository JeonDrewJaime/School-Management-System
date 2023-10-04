<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 255);
            $table->string('last_name', 255);
            $table->string('password', 16)->unique();
            $table->string('user_course', 50)->nullable();
            $table->string('user_year_level', 69)->nullable();
            $table->string('user_sectiom', 50)->nullable();
            $table->string('user_term', 50)->nullable();
            $table->string('user_email_address', 255);
            $table->string('user_contact_number');
            $table->string('user_display_image');
            $table->string('user_age');
            $table->date('birth_date');
            $table->string('user_religion');
            $table->string('fathers_name')->nullable();
            $table->string('mothers_name')->nullable();
            $table->string('guardians_name')->nullable();
            $table->string('payment_type')->nullable();
            $table->string('mode_of_payment')->nullable();
            $table->string('role');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
